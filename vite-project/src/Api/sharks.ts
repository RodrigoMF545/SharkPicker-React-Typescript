export const fetchSharks = async () => {
    const response =await fetch('http://localhost:4000/sharks');
    if(!response.ok){
        throw new Error('Erro ao buscar os tubaroes');
    }
    const data = await response.json();
    return data.sharks;
}