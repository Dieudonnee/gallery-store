import React from 'react'
import Usefirestore from '../hooks/Usefirestore'
import {motion} from 'framer-motion'

const imageGrid = ({setSelectedImg}) => {
    const  docs  = Usefirestore('images')
    
  return (
    <div className="img-grid">
      {docs && docs.map(doc =>(
        <motion.div className="img-wrap" key={doc.id} 
        layout
        whileHover={{opacity:0.8}}
        onClick={() => setSelectedImg(doc.url)}
        >
        
          <motion.img src={doc.url} alt="uploaded pic" 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay: 1}}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default imageGrid