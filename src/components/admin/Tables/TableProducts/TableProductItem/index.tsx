import { IProduct } from "@/@types/products";
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
import { TableCell } from "@/components/ui/table";
import formatCurrency from "@/functions/formatCurrency";
import { TranslateCategory } from "@/functions/translateCategory";
import { useDeleteProduct } from "@/hooks/products/useDelete/useDelete";
import { useUpdateProduct } from "@/hooks/products/useUpdate/useUpdate";
import { DeleteOutline, EditOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useFormik } from "formik";
import Image from "next/image";
import React, { useState } from "react";

const TableProductItem = ({ product }: { product: IProduct }) => {
  const { mutateAsync: updateProduct } = useUpdateProduct();
  const { mutate: deleteProduct } = useDeleteProduct();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [categories] = useState<string[]>([
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]);

  const formik = useFormik({
    initialValues: {
      category: product.category,
      price: product.price,
      title: product.title,
    },
    onSubmit: async (values) => {
      await updateProduct({ ...product, ...values });
      setIsEditDialogOpen(false);
    },
  });

  const handleDelete = async () => {
    deleteProduct(String(product.id));
    setIsDeleteDialogOpen(false);
  };

  return (
    <>
      <TableCell>
        <div className="p-1 border border-neutral-300 dark:border-neutral-70 flex justify-center items-center rounded-lg">
          <Image
            alt={product.title}
            className="object-cover rounded"
            height={64}
            src={product.image!}
            width={64}
          />
        </div>
      </TableCell>
      <TableCell className="font-medium">{product.title}</TableCell>
      <TableCell>{TranslateCategory(product.category)}</TableCell>
      <TableCell className="text-center">
        {formatCurrency(product.price)}
      </TableCell>
      <TableCell className="text-right">
        <Dialog onOpenChange={setIsEditDialogOpen} open={isEditDialogOpen}>
          <DialogTrigger asChild>
            <Button className={"rounded-full"} size={"icon"} variant={"ghost"}>
              <EditOutlined className={"text-primary"} />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <h2>Editar Produto</h2>
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
                    {TranslateCategory(formik.values.category)}
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {TranslateCategory(category)}
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
                  onClick={() => setIsEditDialogOpen(false)}
                  type="button"
                  variant={"outline"}
                >
                  Cancelar
                </Button>
                <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog onOpenChange={setIsDeleteDialogOpen} open={isDeleteDialogOpen}>
          <DialogTrigger asChild>
            <Button className={"rounded-full"} size={"icon"} variant={"ghost"}>
              <DeleteOutline className={"text-red-600 "} />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <h2>Confirmar Deleção</h2>
            </DialogHeader>
            <div className="space-y-4">
              <p>
                Você tem certeza que deseja deletar o produto {product.title}?
              </p>
            </div>
            <DialogFooter>
              <Button
                onClick={() => setIsDeleteDialogOpen(false)}
                type="button"
                variant={"outline"}
              >
                Cancelar
              </Button>
              <Button color="error" onClick={handleDelete} type="button">
                Deletar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </TableCell>
    </>
  );
};

export { TableProductItem };
