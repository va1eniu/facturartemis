const urlCategorias ="http://localhost:5000/api/categorias";

export const getCategorias = async () => {
  try {
    const categoria = await fetch(urlCategorias);
    const datosCategorias = await categoria.json();
    return datosCategorias;
  } catch (error) {
    console.log(error);
  }
};

export const getOneCategoria = async (id) => {
  try {
    const categoria = await fetch(`${urlCategorias}/${id}`);
    const datosCategorias = await categoria.json();
    return datosCategorias;
  } catch (error) {
    console.log(error);
  }
}

export const newCategoria = async (registro) => {
  try {
    await fetch(urlCategorias, {
      method: "POST",
      body: JSON.stringify(registro),
      headers: {
        "Content-Type": "application/json", 
      },
      
    });
    location.href = 'categorias.html';
  } catch (error) {
    console.log(error);
  }
};



export const deleteCategoria = async (id) => {
  try {
    await fetch(`${urlCategorias}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    location.href = 'categorias.html';
  } catch (error) {
      console.log(error);
  }
};

export const updateCategorias = async (idUp,id) => {
  try {
    await fetch(`${urlCategorias}/${id}`,{
      method: 'PUT',
      body: JSON.stringify(idUp),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    location.href = 'categorias.html';
  } catch (error) {
    console.log(error);
  }
}