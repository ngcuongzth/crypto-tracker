import React from 'react'
import DOMPurify from 'dompurify';
const DescriptionCoin = ({ data }) => {
    const { description, name } = data;
    return (
        <section>
            <h3 className='capitalize font-medium text-2xl mb-2'>About {name}</h3>
            <p className='text-sm opacity-80' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description ? description.en : description) }}></p>
        </section>
    )
}

export default DescriptionCoin