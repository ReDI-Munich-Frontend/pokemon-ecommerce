const STORAGE_KEY ='name';
export const setCustomerDetail = (name) =>{
    sessionStorage.setItem(STORAGE_KEY, name);
}

export const getCustomerDetail = () =>{
    const customerDetails=sessionStorage.getItem(STORAGE_KEY);
    if(customerDetails===null){
        return [];
    }
    return (customerDetails);

}