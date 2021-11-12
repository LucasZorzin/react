import React from 'react';

function ModalCart(){
    return (
        // <!-- Cart Modal -->
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Empty Cart
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default ModalCart