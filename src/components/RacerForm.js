import React from 'react';


export const RacerForm = (props) =>{
    return (
        <form onSubmit={props.handleForm}>
            <div className='form-group'>
                <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <input type='text' className='form-control' id='season' placeholder='Season'/>
                    </div>
                    <div className='col-12 col-sm-6'>
                        <input type='text' className='form-control' id='round' placeholder='Round'/>
                    </div>
                </div>
                <div className='row'>
                    <input type='submit' className='btn btn-danger mx-3' />
                </div>
            </div>
        </form>
    )
}