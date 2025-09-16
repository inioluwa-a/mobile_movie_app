import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { Image } from 'react-native'


const MovieCard = ({ id, poster_path, title, vote_average, release_date } : Movie
) => {
  return (
   <Link href={`/movies/${id}`} asChild>
    <TouchableOpacity className="w-[30%]">
        <Image
            source={{
                uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`

                : 'https://placeholder.co/600x400/1a1a1a/ffffff.png'
            }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
        />
    
        </TouchableOpacity>
           
    </Link>
  )
}

export default MovieCard