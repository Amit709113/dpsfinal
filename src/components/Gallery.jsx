import React, { useEffect, useState } from 'react'
import {IoClose} from "react-icons/io5";
import './Gallery.css'
// import { categoryGet, galleryGet, gelleryGetByCategory } from '../crud/UserService';

const Gallery = ({galleryData}) => {

    const [list,setList]=useState(galleryData);
    const [imageList,setImageList]=useState(galleryData);
    const [categoryList,setCategoryList]=useState([{categoryId:"1",categoryName:"_2023"},{categoryId:"2",categoryName:"before_2022"},{categoryId:"3",categoryName:"others"}]);
    
    useEffect(()=>{
        setImageList(list);
        
    },[list]);

    const [model,setModel] =useState(false);
    const[tempImg,setTempImg]=useState('');
        const getImg=({link,caption})=>{
            setTempImg(()=>{
                return ({
                    imgSrc:link,
                    caption:caption
                })
            });
            
        setModel(true);
        }

    const filterItem = (categName)=>{
        const newList=list.filter((item,idx)=>{
            return item.categoryName==categName
        })
        
           setImageList(newList);
           
    }

  return (
    <>
        <div id="gallery-section">
        <div className={model?"model open":"model"}>
            <figure>
                <img src={tempImg.imgSrc} alt={tempImg.caption} />
                <figcaption>{tempImg.caption} </figcaption>
            </figure>
            <IoClose onClick={()=>setModel(false)}/>
        </div>

            <h1 className='heading'>Gallery</h1>
            <div className='gallery-category-section'>
                <button onClick={()=>setImageList(list)} >All</button>
                {
                    categoryList.map((category,idx)=>{
                        return <button onClick={()=>filterItem(category.categoryName)} key={idx}>{category.categoryName}</button>
                
                    })
                }
            </div>
            
            <div className="gallery-main">
                {
                    
                    imageList.map((image,idx)=>{
                        const {galleryLink:link,galleryCaption:caption,galleryAlt:alt}=image;
                        return (<div className='pics' key={idx} onClick={()=>getImg({link,caption})}>
                                
                                    <img  src={link} alt={alt} className='gallery-image' loading='lazy' />
                                </div>)
                    })
                }
            </div>
        </div>        
    </>
  )
}

export default Gallery
