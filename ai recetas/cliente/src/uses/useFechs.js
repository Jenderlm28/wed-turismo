import { useEffect, useState } from 'react';

export const useFechs = (params)=>{
    const { prompts } = params
    const [imagen, setImagen] = useState()

    let form = new FormData( );
    form.append( 'prompt' , prompts );
    
    useEffect(()=>{
        fetch('https://clipdrop-api.co/text-to-image/v1', {
            method: 'POST',
            headers: {
                'x-api-key': "f4606cad01da307478080b0cd4d31dba259395b431c85163ffb88c48039a1914311b1374d54001e82f8ce3abc27105e1",
            },
            body: form,
            })
            .then(response => response.arrayBuffer())
            .then(buffer => {
                const url = URL.createObjectURL(new Blob([buffer], { type: 'image/jpeg' }));
                setImagen(url)
            });
    }, [])
    
    return { imagen }
    
}