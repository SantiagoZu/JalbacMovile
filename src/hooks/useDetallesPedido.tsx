import { useEffect, useState } from "react";
import { Detalle, DetallesResponse } from "../../interfaces/interfaces";
import jalbacApi from "../../api/jalbacApi";

export const useDetallePedido = () => {
    const [detalles, setDetalles] = useState<Detalle[]>()
    const [isLoading, setIsLoading] = useState(true)

    const getDetalles = async () => {
        try {
            const response = await jalbacApi.get<DetallesResponse>('/DetallePedido');
            setDetalles(response.data.resultado);
            setIsLoading(false);
        } catch (error) {
            console.log('Error al obtener detalles:', error);
        }
    };

    const refreshDetalles = async () => {
        setIsLoading(true);
        await getDetalles();
    };

    useEffect(() => {
        getDetalles();
    }, [])


    return {
        detalles,
        isLoading,
        refreshDetalles
    }
}
