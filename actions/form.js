// "use server"
// import fs from "fs/promises"

// export const submitAction = async (e) => {
//       console.log(e.get("name"), e.get("add"))
//       const username = e.get("name")
//       if (!username) {
//         return { error: "The field is required" };
//       }
//       fs.appendFile("file.txt", `Name is ${e.get("name")} and Address is ${e.get("add")} \n`)
//     }

"use server";

export async function submitAction(prevState, formData) {
  const username = formData.get("username");

  // Server-side validation
  if (!username) {
    return { error: "The field is required" };
  }
  if (username.length < 3) {
    return { error: "Min length is 3" };
  }
  if (username.length > 8) {
    return { error: "Max length is 8" };
  }

  try {
    // Simulating a backend API call
    // const response = await fetch("http://localhost:3000/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ username }),
    // });
    console.log(username)

    // const resText = await response.text();
    const resText = "Submission Completed";

    // if (!response.ok) {
    //   return { error: "Failed to submit" };
    // }

    return { success: `Response: ${resText}` };
  } catch (error) {
    return { error: "Something went wrong" };
  }
}
