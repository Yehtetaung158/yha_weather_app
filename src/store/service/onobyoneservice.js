import { useGetCurrentByCityMutation } from './endpiont/weatherendpoint';

export const fetchItemsOneByOne = async (ids) => {
  const [fetchItemById] = useGetCurrentByCityMutation();
  const fetchedItems = [];

  for (const id of ids) {
    try {
      const item = await fetchItemById(id).unwrap();
      fetchedItems.push(item);
    } catch (error) {
      console.error('Failed to fetch item:', error);
      // Optionally handle the error (e.g., retry logic, skip, etc.)
    }
  }

  return fetchedItems;
};
 
export const addObjectToLocalStorage=(newObject) =>{
    let array = localStorage.getItem("myArray");
    array = array ? JSON.parse(array) : [];
    array.push(newObject);
    const updatedArray = JSON.stringify(array);
    localStorage.setItem("myArray", updatedArray);
  }
// export default fetchItemsOneByOne;
