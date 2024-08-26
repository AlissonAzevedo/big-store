import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const LoadingSkeletonTableProducts = () => {
  return (
    <div
      className={
        "p-1 border border-neutral-300 dark:border-neutral-70 rounded-lg h-[600px] overflow-hidden"
      }
    >
      <div className="flex flex-col overflow-y-auto h-full">
        <div className="p-2">
          <Skeleton className="w-full h-10 mb-2" />
        </div>
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
            {[...Array(6)].map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Skeleton className="w-36 h-36 rounded-lg" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-72 h-6" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="w-32 h-6" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="w-20 h-6" />
                </TableCell>
                <TableCell className="text-right gap-4">
                  <div className="flex items-center justify-end gap-4">
                    <Skeleton className="w-6 h-6" />
                    <Skeleton className="w-6 h-6" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export { LoadingSkeletonTableProducts };
