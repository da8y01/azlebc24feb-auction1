"use client";
import { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

export default function AuctionPage() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let loadingToastId: string | number | undefined;

    try {
      // Muestra un toast de carga con formato sólido y color azul
      loadingToastId = toast({
        title: "Submitting Form",
        status: "loading", // 'loading' es el status para el estilo de carga
        duration: null,
        isClosable: false,
        variant: "solid",
      });

      // Intenta realizar la acción de envío
      console.log(formData);

      // Cierra el toast de carga cuando la acción se completa
      if (loadingToastId !== undefined) {
        toast.close(loadingToastId);
      }

      // Muestra un toast de éxito con formato sólido y color verde
      toast({
        title: "Successful Submission",
        description: "Your form was submitted successfully.",
        status: "success", // 'success' es el status para el estilo de éxito
        duration: 5000,
        isClosable: true,
        variant: "solid",
      });

      /////////////  console.log(response); // ACTIVA TOAST DE MENSAJE DE SUBMIT ////////////////////////
    } catch (error) {
      // Cierra el toast de carga cuando la acción falla
      if (loadingToastId !== undefined) {
        toast.close(loadingToastId);
      }

      // Muestra un toast de error con formato sólido y color rojo
      toast({
        title: "Submission Error",
        description:
          "There was an error submitting the form. Please try again.",
        status: "error", // 'error' es el status para el estilo de error
        duration: 5000,
        isClosable: true,
        variant: "solid",
      });

      console.error(error);
    }
  };

  return (
    <main>
      <h1>Subasta</h1>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Título</FormLabel>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Título..."
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Descripción</FormLabel>
          <Input
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Descripción..."
          />
        </FormControl>

        <Button type="submit" mt={4} colorScheme="teal">
          Crear
        </Button>
      </form>
    </main>
  );
}
