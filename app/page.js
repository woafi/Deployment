// "use client"
// import { submitAction } from "@/actions/form";
// import {useRef} from 'react';
// export default function Home() {
//   const formRef = useRef()
//   // const submitAction = async (e) => {
//   //   "use server"
//   //   console.log(e.get("name"), e.get("add"))
//   //   fs.appendFile("file.txt", `Name is ${e.get("name")} and Address is ${e.get("add")} \n`)
//   // }
//   return (
//     <div className="w-1/2 mx-auto my-5">
//       <form ref={formRef} action={(e)=> {submitAction(e); formRef.current.reset()}}>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input name="name" id="name" className="bg-amber-200 my-1.5" type="text" />
//         </div>
//         <div>
//           <label htmlFor="add">Address</label>
//           <input name="add" id="add" className="bg-amber-200 my-1.5" type="text" />
//         </div>
//         <div>
//           <button className="border p-1">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }





"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitAction } from "@/actions/form";

function Form() {
  const [state, formAction] = useFormState(submitAction, { error: null, success: null });
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="p-4 rounded">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="border p-2 rounded"
      />
      <button type="submit" disabled={pending} className="ml-2 p-2 bg-blue-500 text-white rounded">
        {pending ? "Submitting..." : "Submit"}
      </button>
      {state.error && <p className="text-red-500">{state.error}</p>}

      {state.success && <p className="text-green-500">{state.success}</p>}
    </form>
  );
}

export default Form;
