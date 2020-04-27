import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <div className="container py-5">
            
            <div className="row">
                <div className="col-10 mx-auto">
                    <Title title="contact us" />
                </div>
                <div className="col-10 mx-auto mt-4">
                    <form className="mt-4"   action="https://formspree.io/xwkonpjl" method="POST">
                        <div className="form-group">
                            <input
                            type="text"
                            name="text"
                            className="form-control"
                            placeholder="yousef ayman"
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="email@email.com"
                            />
                        </div>
                        <div className="form-group">
                            <input
                            type="text"
                            name="subject"
                            className="form-control"
                            placeholder="important !!"
                            />
                        </div>
                        <textarea name="message" rows="10" className="form-control" placeholder="message"></textarea>
                        <div className="form-group">
                            <input
                            type="submit"
                            name="button"
                            className="form-control mt-3 bg-primary text-white"
                            value="Send"
                            />
                        </div>
                    </form>    
                </div>
            </div>
        </div>
    )
}
