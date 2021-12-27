import React, { useEffect , useState } from 'react';

import axios from 'axios'



const Admin = () => {


    const [images, setİmages] = useState([])

    useEffect(() => {
        GetSlider()
    })

    const GetSlider = async () => {
        console.log('Deneme')
        await axios.get('/admin/slider')
            .then((res) => {
                setİmages(res.data)
            })
    }


    return (
        <div clasName="Admin">




            {
                images.map((item) => (
                    < img width="25" src={item.img} alt="" />
                ))

            }


        </div>
    )
}

export default Admin