import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import axios from "axios";

registerCoreBlocks();
const CustomForm = () => {
  const submitFormHandler = (data: any) => {
    axios.post("http://localhost:3000/api/gsheet", data).then((res) => {
      console.log("🚀 ---------------------------------------------🚀");
      console.log("🚀 ~ file: index.tsx:10 ~ submitFormHandler ~ res", res);
      console.log("🚀 ---------------------------------------------🚀");
    });
  };
  return (
    <div className="h-full">
      <Form
        formId={1}
        applyLogic={true}
        formObj={{
          blocks: [
            {
              name: "welcome-screen",
              id: "welcome",
              attributes: {
                label: "Let's start gathering some details...",
                description: "... about your preferences in a car!",
              },
            },
            {
              name: "short-text",
              id: "name",
              attributes: {
                required: true,
                label: "Let's start with your name",
              },
            },
            {
              name: "date",
              id: "date",
              attributes: {
                required: true,
                label:
                  "Great {{field:name}}, by when would you like to have the car?",
              },
            },
            {
              name: "email",
              id: "email",
              attributes: {
                required: true,
                label:
                  "Thanks {{field:name}}, what is the best email to reach you at?",
              },
            },
            {
              name: "dropdown",
              id: "car-type",
              attributes: {
                required: true,
                label: "What type of car would you like to have?",
                choices: [
                  {
                    label: "Sedan",
                    value: "sedan",
                  },
                  {
                    label: "SUV",
                    value: "suv",
                  },
                  {
                    label: "Hatchback",
                    value: "hatchback",
                  },
                  {
                    label: "Off roader",
                    value: "off-roader",
                  },
                  {
                    label: "Exotic",
                    value: "exotic",
                  },
                ],
              },
            },
            {
              name: "multiple-choice",
              id: "preferences",
              attributes: {
                required: true,
                multiple: true,
                verticalAlign: false,
                label: "What matters to you most in the car?",
                choices: [
                  {
                    label: "Looks",
                    value: "looks",
                  },
                  {
                    label: "Comfort",
                    value: "comfort",
                  },
                  {
                    label: "Mileage",
                    value: "mileage",
                  },
                  {
                    label: "Safety",
                    value: "safety",
                  },
                  {
                    label: "Features",
                    value: "features",
                  },
                  {
                    label: "Environmentally friendly",
                    value: "environmentally-friendly",
                  },
                ],
              },
            },
            {
              name: "statement",
              id: "skip_one",
              attributes: {
                label: "You are doing great so far!",
                buttonText: "Continue",
                quotationMarks: true,
              },
            },
          ],
          settings: {
            animationDirection: "horizontal",
            disableWheelSwiping: true,
            disableNavigationArrows: true,
            disableProgressBar: false,
          },
          theme: {
            backgroundColor: "transparent",
            buttonsBgColor: "rgb(34 197 94)",
            logo: {
              src: "",
            },
            questionsColor: "#000",
            answersColor: "rgb(34 197 94 )",
            buttonsFontColor: "#fff",
            buttonsBorderRadius: 25,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "rgb(34 197 94 )",
            progressBarBgColor: "#ccc",
          },
        }}
        onSubmit={(data: any, { completeForm, setIsSubmitting }) => {
          const valuesList = Object.values(data.answers).map(
            (item: any) => item.value
          );
          const mergedValues = valuesList.map((value) =>
            Array.isArray(value) ? value.join(", ") : value
          );

          setTimeout(() => {
            submitFormHandler(mergedValues);
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      />
    </div>
  );
};

export default CustomForm;
