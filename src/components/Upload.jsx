

export const Upload = ()=> {
    return(
        <>
            <div >
                <div>
                    <img src="/arrow_back.svg"/>
                    <p>Back</p>
                </div>
                <div >
                    <form action="http://localhost:3000/" encType="multipart/form-data" method="post">
                        <label>
                            <img src='/upload.svg' alt='upload'/>
                            <p>Upload picture</p>
                        </label>
                        <input                            
                            type='file' style={{display:'none'}}/>
                        <div>
                            <label >Title</label>
                            <input
                                type='text'/>
                        </div>
                        <div>
                            <label >Description</label>
                            <textarea
                                type='textarea'/>
                        </div>
                        <div>
                            <label >Link</label>
                            <input
                                type='text'/>
                        </div>
                        <div >
                        <input type='submit' value={'Add project'}/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )     
}