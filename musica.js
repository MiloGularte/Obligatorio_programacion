// Importa la función imprimir desde utils.js
import { imprimir } from "./utils.js";

// Función para obtener los géneros musicales desde la API de Last.fm
const getTopTags = async () => {
    const apiKey = '2313325501ddb0439a530274bbfabd3e'; // Reemplaza 'TU_API_KEY' con tu propia clave de API
    const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&api_key=${apiKey}&format=json`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error al obtener los géneros musicales');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar los géneros:', error);
        return { toptags: { tag: [] } }; // Devuelve un objeto vacío en caso de error
    }
};

// Función para cargar los géneros musicales desde la API de Last.fm
const cargarGeneros = async () => {
    try {
        const response = await getTopTags();
        const generos = response.toptags.tag;
        imprimirGeneros(generos);
    } 
    catch (error) {
        console.error('Error al cargar los géneros:', error);
    }

    imprimirGeneros(generos);
} catch (error) {
    console.error('Error al cargar los géneros:', error);
}

    
};

// Resto del código para filtrar canciones, etc.
