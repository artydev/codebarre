async function fetchApi<T>(url: string): Promise<T> {
    const response = await fetch(url);
    return  response.json(); 
}
  

export { fetchApi }