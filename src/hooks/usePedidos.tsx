import { useEffect, useState } from "react";
import { Pedido, PedidosResponse } from "../../interfaces/interfaces";
import jalbacApi from "../../api/jalbacApi";

export const usePedidos = () => {
    const [pedidos, setPedidos] = useState<Pedido[]>()
    const [isLoading, setIsLoading] = useState(true)

    const getPedidos = async () => {
        try {
            const response = await jalbacApi.get<PedidosResponse>('/Pedido');
            setPedidos(response.data.resultado);
            setIsLoading(false);
        } catch (error) {
            console.log('Error al obtener pedidos:', error);
        }
    };

    const refreshPedidos = async () => {
        setIsLoading(true);
        await getPedidos();
    };

    useEffect(() => {
        getPedidos();
    }, [])


    return {
        pedidos,
        isLoading,
        refreshPedidos
    }
}
