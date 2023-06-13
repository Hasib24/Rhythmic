import React from 'react';
import SectionHeader from '../../../../components/sectionHeader/SectionHeader';
import useTitle from '../../../../hooks/useTitle';

const Notes = () => {
    useTitle('Notes')
    return (
        <section>
            <SectionHeader>Notes</SectionHeader>
            <div>
                    <div className='mx-auto container flex justify-center p-5'>
                        {/* You can open the modal using ID.showModal() method */}
                        <button className="btn h-[40vh] w-[40vh] text-7xl" onClick={()=>window.my_modal_3.showModal()}>+</button>
                        <dialog id="my_modal_3" className="modal">
                          <form method="dialog" className="modal-box">
                            <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <h3 className="font-bold text-lg">Welcome to notes!</h3>
                            <p className="py-4">
                            Website Under Construction!
                            Exciting updates coming soon! <br />
                                Press ESC key or click on ✕ button to close</p>
                          </form>
                        </dialog>
                    </div>
            </div>
        </section>
    );
};

export default Notes;