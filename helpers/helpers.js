export const getPriceQueryParams = (queryParams, key, value) => {
    const hasValueInParams = queryParams.has(key);
  
    if(value && hasValueInParams){
      queryParams.set(key, value);
    } else if (value) {
      queryParams.append(key, value);
    } else if (hasValueInParam) {
      queryParams.delete(key);
    }
    return queryParams;
  };
  