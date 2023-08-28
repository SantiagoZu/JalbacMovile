import { useEffect, useState } from "react"
import jalbacApi from "../../api/jalbacApi"
import { Cliente, ClientesResponse } from "../../interfaces/interfaces"

export const useClientes = () => {

    const [clientes, setClientes] = useState<Cliente[]>()
    const [isLoading, setIsLoading] = useState(true)

    const getClientes = async () => {
        try {
            const response = await jalbacApi.get<ClientesResponse>('/Cliente');
            setClientes(response.data.resultado);
            setIsLoading(false);
        } catch (error) {
            console.log('Error al obtener clientes:', error);
        }
    };

    const refreshClientes = async () => {
        setIsLoading(true);
        await getClientes();
    };


    useEffect(() => {
        getClientes();
    }, [])


    return {
        clientes,
        isLoading,
        refreshClientes
    }
}
