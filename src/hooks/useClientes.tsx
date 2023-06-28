import { useEffect, useState } from "react"
import jalbacApi from "../../api/jalbacApi"
import { Cliente, ClientesResponse } from "../../interfaces/interfaces"

export const useClientes = () => {

    const [clientes, setClientes] = useState<Cliente[]>()

    const getClientes = async () => {
        try {
            const response = await jalbacApi.get<ClientesResponse>('/Cliente');
            setClientes(response.data.resultado);
            console.log(response);
        } catch (error) {
            console.log('Error al obtener clientes:', error);
        }
    };

    useEffect(() => {
        getClientes();
    }, [])


    return {
        clientes
    }
}
