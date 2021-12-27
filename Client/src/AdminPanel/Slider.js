import '../css/AdminCss/Slider.css'

const Slider = () => {



    return (
        <form  method="POST" enctype="multipart/form-data"  className="Slider">
            <input className="file-upload" type="file"  name="image" multiple />
            <button className="btn"  type="submit">Ekle</button>
        </form>
    )
}

export default Slider;