"use client";

import { LoadingSkeletonTableProducts } from "@/components/@shared/LoadingSkeletonTableProducts/LoadingSkeletonTableProducts";
import { SearchInput } from "@/components/admin/Tables/TableProducts/SearchInput";
import { TableProductItem } from "@/components/admin/Tables/TableProducts/TableProductItem";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCreateProduct } from "@/hooks/products/useCreate/useCreate";
import { useGetAllProducts } from "@/hooks/products/useGet/useGetAll";
import { useProductStore } from "@/stores/productsStore/products-store";
import { Add } from "@mui/icons-material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

const TableProducts = () => {
  const { data: products, isLoading } = useGetAllProducts();
  const { filteredProducts, setProducts } = useProductStore((state) => ({
    filteredProducts: state.filteredProducts,
    setProducts: state.setProducts,
  }));

  const { mutateAsync: createProduct } = useCreateProduct();

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const [categories] = useState<string[]>([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);

  const formik = useFormik({
    initialValues: {
      category: "",
      price: "",
      title: "",
    },
    onSubmit: async (values) => {
      await createProduct({
        category: values.category,
        price: parseFloat(values.price),
        title: values.title,
      });
      setIsCreateDialogOpen(false);
    },
  });

  useEffect(() => {
    if (products) {
      setProducts(products);
    }
  }, [products, setProducts]);

  if (isLoading) {
    return <LoadingSkeletonTableProducts />;
  }

  return (
    <div className={"flex w-full flex-col"}>
      <div className={"flex my-2 justify-between"}>
        <SearchInput />

        <Dialog onOpenChange={setIsCreateDialogOpen} open={isCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button variant={"secondary"}>
              <Add className={"text-primary"} />
              Criar Produto
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <h2>Criar Novo Produto</h2>
            </DialogHeader>
            <form onSubmit={formik.handleSubmit}>
              <div className="space-y-4">
                <Input
                  name="title"
                  onChange={formik.handleChange}
                  placeholder={"Nome"}
                  value={formik.values.title}
                />
                <Select
                  name="category"
                  onValueChange={(value) =>
                    formik.setFieldValue("category", value)
                  }
                  value={formik.values.category}
                >
                  <SelectTrigger>
                    {formik.values.category || "Selecione uma categoria"}
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  name="price"
                  onChange={formik.handleChange}
                  placeholder={"Preço"}
                  type="number"
                  value={formik.values.price}
                />
              </div>
              <DialogFooter className={"mt-2"}>
                <Button
                  onClick={() => setIsCreateDialogOpen(false)}
                  type="button"
                  variant={"outline"}
                >
                  Cancelar
                </Button>
                <Button type="submit">Criar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div
        className={
          "p-1 border border-neutral-300 dark:border-neutral-70 rounded-lg h-[600px] overflow-hidden"
        }
      >
        <div className="overflow-y-auto h-full">
          <Table>
            <TableHeader popover={"manual"}>
              <TableRow>
                <TableHead className="w-[150px]"></TableHead>
                <TableHead className="w-[300px]">Nome</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead className="text-center">Preço</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts?.length === 0 && (
                <TableRow>
                  <TableCell className="text-center" colSpan={5}>
                    Nenhum produto encontrado
                  </TableCell>
                </TableRow>
              )}
              {filteredProducts?.map((product) => (
                <TableRow key={product.id}>
                  <TableProductItem product={product} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export { TableProducts };
