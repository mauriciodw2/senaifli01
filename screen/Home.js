import React from 'react'

import {StatusBar, Dimensions} from 'react-native'

import styled from 'styled-components/native'

import Header from '../components/Header'

import Hero from '../components/Hero'

import Movies from '../components/Movies'
import videos from '../you/videos.js'

const Container = styled.ScrollView`
    flex:1;
    background-color: #000;
    `
    const Poster = styled.ImageBackground`
    width:100%;
    height: ${(Dimensions.get('window').height * 81)/ 250}px;
    `
    const Separatorh = styled.View`
    width: 3px;
    height: 3px;
    margin: 25px 0;
    border-radius:3px
    `
    const getRandomVideo = () => {
        const max = Math.floor(videos.length);
        const random = Math.floor(Math.random() * max);
      
        return videos[random];
      }
      
      const getRandomArrayVideos = (arrayLength) => {
        let randomArrayVideos = [];
        
        for (let i = 0; i < arrayLength; i++) {
          randomArrayVideos.push(getRandomVideo());
        }
      
        return randomArrayVideos;
      }
      
      const getImageUrl = (id) => {
        const imageUrl = `http://i3.ytimg.com/vi/${id}/maxresdefault.jpg`;
        return imageUrl;
      }
      
      const getVideoUrl = (id) => {
        const videoUrl = `https://www.youtube.com/embed/${id}`;
        return videoUrl;
      }
      
      const randomPoster = getRandomVideo();
const Home = () => {
    return (
            
            <Container>
                <StatusBar 
            transLucent 
            background-color='transparent'
            barStyle ='light-content'
            />
                <Poster image={getImageUrl(randomPoster.videoId)}
                title={randomPoster.title}
                tags={randomPoster.tags}
                menu={<Header />} 
        
                />
                 <Movies 
                listName={'Recomendados'}
                videos={getRandomArrayVideos(7)}
            />
            <Movies 
                listName={'Em alta'}
                videos={getRandomArrayVideos(5)}
            />
            <Movies 
                listName={'Desenvolvimento'}
                videos={getRandomArrayVideos(9)}
            />
            <Movies 
                listName={'Programação'}
                videos={getRandomArrayVideos(6)}
            />
            <Movies 
                listName={'Code'}
                videos={getRandomArrayVideos(7)}
            />
                <Header />

                
                <Separatorh />
                <Separatorh />
                
                <Hero />
                <Movies />
                
            </Container>
            
        )
   }

export default Home