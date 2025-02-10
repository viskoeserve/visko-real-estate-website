
// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import Swal from "sweetalert2";

// const Contact = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data, e) => {
//     e.preventDefault();
//     const contactData = {
//       li_subject: data.subject,
//       li_name: data.name,
//       li_email: data.email,
//       li_message: data.message,
//       li_company: "Visko Real Estate Private Limited",
//     };
//     axios
//       .post(
//         "https://visko.group/api/inquiry/message/insert-message",
//         contactData
//       )
//       .then((response) => {
//         Swal.fire({
//           position: "center",
//           icon: "success",
//           title: `${response.data.message}`,
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });

//     reset();
//   };
//   return (
//     <div>
//       <section id="contact" className="contact">
//         <div className="container" data-aos="fade-up">
//           <div className="section-title">
//             <h2>Contact</h2>
//             <p className=" ">VISKO REAL ESTATE PRIVATE LIMITED</p>
//           </div>

//           <div className="row" data-aos="fade-up" data-aos-delay="100">
//             <div className="col-lg-6">
//               <div className="row">
//                 <div className=" d-flex  gap-5  shadow-lg py-5 ">
//                   <div className="info-box mt-3">
//                     <i className="bi bi-envelope p-2 fs-2 "></i>
//                   </div>
//                   <div className="mb-3">
//                     <h3 className=" text-secondary  fw-bold">Email Us</h3>
//                     <p>info@viskorealestate.com</p>
//                   </div>
//                 </div>

//                 <div className=" shadow-lg  py-5  d-flex gap-5 ">
//                   <div className="info-box mt-3">
//                     <i className="bi bi-telephone p-2 fs-2 "></i>
//                   </div>
//                   <div className="mb-3">
//                     <h3 className=" text-secondary fw-bold">Call Us</h3>
//                     <p>+91 9238154587</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-lg-6   py-1 ">
//               <form
//                 action=""
//                 role="form"
//                 className="php-email-form"
//                 onSubmit={handleSubmit(onSubmit)}
//               >
//                 <div className="row">
//                   <div className="col form-group">
//                     <input
//                       type="text"
//                       name="name"
//                       className="form-control"
//                       id="name"
//                       placeholder="Your Name"
//                       {...register("name")}
//                       required
//                     />
//                     {errors.name && <span>This field is required</span>}
//                   </div>
//                   <div className="col form-group">
//                     <input
//                       type="email"
//                       className="form-control"
//                       name="email"
//                       id="email"
//                       placeholder="Your Email"
//                       {...register("email", { required: true })}
//                       required
//                     />
//                     {errors.email && <span>This field is required</span>}
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="subject"
//                     id="subject"
//                     placeholder="Subject"
//                     {...register("subject", { required: true })}
//                     required
//                   />
//                   {errors.subject && <span>This field is required</span>}
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     className="form-control"
//                     name="message"
//                     rows="5"
//                     placeholder="Message"
//                     {...register("message", { required: true })}
//                     required
//                   ></textarea>
//                   {errors.message && <span>This field is required</span>}
//                 </div>
//                 <div className="my-3">
//                   <div className="loading">Loading</div>
//                   <div className="error-message"></div>
//                   <div className="sent-message">
//                     Your message has been sent. Thank you!
//                   </div>
//                 </div>
//                 <div className="text-center">
//                   <button type="submit">Send Message</button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";


const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    const contactData = {
      li_subject: data.subject,
      li_name: data.name,
      li_email: data.email,
      li_message: data.message,
      li_company: "Visko Real Estate Private Limited",
    };
    axios
      .post(
        "https://visko.group/api/inquiry/message/insert-message",
        contactData
      )
      .then((response) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${response.data.message}`,
          showConfirmButton: false,

          timer: 1500,
        });

      })
      .catch((error) => {
        console.error("Error:", error);
      });

    reset();
  };
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>VISKO REAL ESTATE PRIVATE LIMITED</p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">

            <div className="col-lg-4">
              <div className="">
                <div className="col-md-12 pb-2  ">
                  <div className="info-box my-1 ">

                    <i className="bi bi-envelope p-2"></i>
                    <h3>Email Us</h3>
                    <p>info@viskorealestate.com</p>
                  </div>
                </div>

                <div className="col-md-12 pb-2   ">
                  <div className="info-box my-1">

                    <i className="bi bi-telephone p-2"></i>
                    <h3>Call Us</h3>
                    <p>+91 9238154587</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8">

              <form
                action=""
                role="form"
                className="php-email-form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      {...register("name")}
                      required
                    />
                    {errors.name && <span>This field is required</span>}
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      {...register("email", { required: true })}
                      required
                    />
                    {errors.email && <span>This field is required</span>}
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    {...register("subject", { required: true })}
                    required
                  />
                  {errors.subject && <span>This field is required</span>}
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    {...register("message", { required: true })}
                    required
                  ></textarea>
                  {errors.message && <span>This field is required</span>}
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
