import React from 'react';
import {BsExclamationSquareFill} from 'react-icons/bs'

const  ProductReport=()=>{
  return (
    <div className='product-report '>
        <div className='report-content    '>
            <BsExclamationSquareFill className='report-icon    '/>
            <span>
                <a href="#" className='report font-bold '>Şikayet Et</a>
            </span>
        </div>
    </div>
  )
}

export default ProductReport;