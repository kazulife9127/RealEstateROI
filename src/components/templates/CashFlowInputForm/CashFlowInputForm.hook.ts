import { useContext } from 'react';
import { CashFlowContext } from '../CashFlowContext.tsx';
import { CashFlowInputData } from '@/types/SimulationData.ts'

export const useCashFlowInputForm = () => {
    const context = useContext(CashFlowContext);
    if(!context){
        throw new Error();
    }

    const { data, setData, resetData } = context;

    const handleChange = (field: keyof CashFlowInputData, value: number 
        | ''  
        | 'equalPrincipal') => {
        setData(prev => ({ ...prev, [field]: value }));
    }

    const handleReset = () => {
        resetData();
    }

    const handleSimulation = () => {
        console.log(data);
    }

    return {
        data,
        handleChange,
        handleReset,
        handleSimulation
    }
    
}