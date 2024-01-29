import Header from '../components/Header';
import StoryList from '../components/StoryList';
import Slider from '../components/Slider';
import MoreStories from '../components/MoreStories';
import { useState, useEffect  } from 'react';

function Home(){
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/stories?_start=0&_limit=10')
          .then(response => response.json())
          .then(json => {
            let stories = []
            json.forEach((item, index) => {
                if(index % 2){
                    stories.push([json[index - 1], json[index]])
                }
            });
            setStories(stories)
          })
          .catch(error => console.error(error));
      }, []);

    return <>
        <Header />
        <Slider />
        <StoryList stories={stories}/>
        <MoreStories /> 
    </>
};

export default Home;