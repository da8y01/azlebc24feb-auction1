"use client";
import { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";

export default function OfferPage() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    bidder: "",
    auction: "",
    amount: "",
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
      <h1>Oferta</h1>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Licitante</FormLabel>
          <Input
            id="bidder"
            name="bidder"
            value={formData.bidder}
            onChange={handleChange}
            placeholder="Licitante..."
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Subasta</FormLabel>
          <Input
            id="auction"
            name="auction"
            value={formData.auction}
            onChange={handleChange}
            placeholder="Subasta..."
          />
        </FormControl>

        <FormControl isRequired mt={4}>
          <FormLabel>Monto</FormLabel>
          <Input
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Monto..."
          />
        </FormControl>

        <Button type="submit" mt={4} colorScheme="teal">
          Ofertar
        </Button>
      </form>
    </main>
  );
}
