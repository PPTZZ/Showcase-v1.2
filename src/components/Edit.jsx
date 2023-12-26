export const Edit = ()=> {
    return(
        <>
            <div>
                <div>
                    <img src="/arrow_back.svg"/>
                    <p className='backText'>Back</p>
                </div>
                <div>
                    <form>
                        <label>
                            <img src='/test pic 1.jpeg' alt=''/>
                        </label>
                        <input type='file' style={{display:'none'}}/>
                        <div>
                          <label >Title</label>
                          <input  type='text'/>
                        </div>
                        <div>
                          <label>Description</label>
                          <textarea type='textarea'/>
                        </div>
                        <div>
                          <label>Link</label>
                          <input type='text'/>
                        </div>
                        <div>
                            <input type='submit' value={'Add project'}/>
                        </div>
                    </form>
                    <div>
                        <button>Delete Project</button>
                    </div>
                </div>
            </div>
        </>
    )
}