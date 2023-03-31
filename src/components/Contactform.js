import React, { useState } from 'react'
import '../styles/contactform.css'
function Contactform() {
	const [name, setName]= useState();
	const [email, setEmail]= useState();
	const [subject, setSubject]= useState();
	const [message, setMessage]= useState();
  return (


    <section className="ftco-section py-3">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-3">
					<h2 className="heading-section">Contact Form</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12">
					<div className="wrapper">
						<div className="row no-gutters mb-5">
							<div className="col-lg-7">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h3 className="mb-4">Contact Us</h3>
									<form action="https://formsubmit.co/1347872e09c810e7a154f200d3033ce8" method="POST" id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-6 mb-3">
												<div className="form-group">
													<label className="label" htmlFor="name">Full Name</label>
													<input type="text" className="form-control" name="name" id="name"
														placeholder="Name" required value={name} onChange={(e)=>{setName(e.target.value)}}/>
												</div>
											</div>
											<div className="col-md-6 mb-3">
												<div className="form-group">
													<label className="label" htmlFor="email">Email Address</label>
													<input type="email" className="form-control" name="email" id="email"
														placeholder="Email" required value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
												</div>
											</div>
											<div className="col-md-12 mb-3">
												<div className="form-group">
													<label className="label" htmlFor="subject">Subject</label>
													<input type="text" className="form-control" name="subject" id="subject"
														placeholder="Subject" required value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
												</div>
											</div>
											<div className="col-md-12 mb-3">
												<div className="form-group">
													<label className="label" htmlFor="#">Message</label>
													<textarea name="message" className="form-control" id="message" cols="30"
														rows="4" placeholder="Message" required value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
												</div>
											</div>
											<div className="col-md-12 mb-3">
												<div className="form-group">
													<button type="submit" className="btn btn-primary">Send Message</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div> 
							<div className="col-lg-5 d-flex align-items-stretch">
								<div id="map">
									<iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.6303554317474!2d76.81124881413407!3d29.961309329452117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e38b1c9410e23%3A0xff2e40965dcd7b69!2sUniversity%20Institute%20of%20Engineering%20and%20Technology%2C%20Kurukshetra%20University!5e0!3m2!1sen!2sin!4v1677816132269!5m2!1sen!2sin"
										width="100%" height="100%" style={{border:"1px solid"}} allowFullScreen="" loading="lazy"
										referrerPolicy="no-referrer-when-downgrade"></iframe>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<div className="dbox w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-map-marker"></span>
									</div>
									<div className="text">
										<p><span>Address:</span>UIET KUK</p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="dbox w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-envelope"></span>
									</div>
									<div className="text">
										<p><span>Email:</span> <a href="mailto:ecelluiet@kuk.ac.in">Email Id</a>
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-globe"></span>
									</div>
									<div className="text">
										<p><span>Website</span> <a href="/">Website</a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Contactform
