import React, { useEffect, useState } from 'react'
import ImageGallery from './Components/ImageGallery';
import ImageSearch from './Components/ImageSearch';



const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('house');


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${search}}&image_type=photo&per_page=6`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch((error) => {
        return console.log(error)
      });

  }, [search])
  return (
    <div className="container mx-auto my-24 p-4">
      <ImageSearch searchedText={(text)=>setSearch(text)}/>
        {!isLoading && images.length ===0 && <h1 className="text-5xl text-center mx-auto mt-70">No Image Found</h1>
        }
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading....</h1> :
        <div className="grid grid-cols-1 p-4 sm:grid-cols-2  md:grid-cols-3 gap-6  ">
          {images.map((image) => {
            return <ImageGallery key={image.id} image={image} />
          })}
        </div>}
    </div>
  )
}

export default App