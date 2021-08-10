import React, { useEffect } from "react";
import * as Survey from "survey-react";
import { useHistory } from "react-router-dom";
import "survey-react/modern.css";
import "../index.css";
import firebase from "../firebase";

Survey.StylesManager.applyTheme("modern");
const myloc = Survey.surveyLocalization.locales["en"];
myloc.progressText = "Página {0} de {1}";

const questions = [
  "¿Eres arrogante?",
  "¿Has tenido dificultades porque consumes drogas o bebidas alcohólicas en la escuela?",
  "¿Se aburren tus amigos en las fiestas donde no sirven bebidas alcohólicas?",
  "¿Discuten demasiado tus padres o tutores?",
  "¿Te cansas con frecuencia?",
  "¿Te asustas con facilidad?",
  "¿Tienes menos energía de la que crees que deberías tener?",
  "¿Te sientes frustrado(a) con facilidad?",
  "¿Amenazas a otros con hacerles daño?",
  "¿Te sientes solo (a) la mayor parte del tiempo?",
  "¿Dices groserías o vulgaridades?",
  "¿Escuchas cuidadosamente cuando alguien te habla?",
  "¿Son tus amigos (as) del agrado de tus padres o tutores?",
  "¿Se niegan tus padres o tutores a hablarte cuando se enfadan contigo?",
  "¿Actúas impulsivamente y sin pensar en las consecuencias que tendrán tus actos?",
  "¿Has tenido algún trabajo eventual con sueldo?",
  "¿Te has hecho daño o le has hecho daño a otra persona  accidentalmente, estando bajo los efectos del alcohol o drogas?",
  "¿Tienes buena ortografía?",
  "¿Tienes amigos que causan daño o destrucción intencionalmente?",
  "La mayoría de las veces, ¿saben tus padres o tutores dónde estás y lo que estás haciendo?",
  "¿Sueles perderte actividades o acontecimientos porque has gastado demasiado dinero en drogas o bebidas alcohólicas?",
  "¿Participas en muchas actividades en compañía de tus padres o tutores?",
  "Te sientes nervioso (a) la mayor parte del tiempo?",
  "¿Has robado alguna vez?",
  "¿Has sentido que eres adicto (a) al alcohol o a las drogas?",
  "¿Sabes leer bien?",
  "¿Has estado ausente o llegado tarde a tu trabajo o escuela con frecuencia?",
  "¿Sientes que la gente está en contra tuya?",
  "¿Tus amigos llevan drogas a las fiestas?",
  "¿Peleas con frecuencia?",
  "¿Tienes mal genio?",
  "¿Te prestan atención tus padres o tutores cuando les hablas?",
  "¿Has comenzado a consumir mayores cantidades de drogas o alcohol para obtener el efecto que deseas?",
  "¿Te dice la gente que eres descuidado (a)?",
  "¿Eres terco (a) o testarudo (a)?",
  "¿Has tenido alguna vez o tienes actualmente un empleo?",
  "¿Has amenazado alguna vez a alguien con un arma?",
  "¿A veces te vas de las fiestas porque en ellas no hay bebidas alcohólicas o drogas?",
  "¿Saben tus padres o tutores cómo piensas o te sientes realmente?",
  "¿Actúas impulsivamente con frecuencia?",
  "¿Sientes un deseo constante de consumir bebidas alcohólicas o drogas?",
  "¿Pierdes el hilo del pensamiento con mucha frecuencia?",
  "¿Tienes dificultades para concentrarte?",
  "¿Has tenido alguna vez un empleo con sueldo que haya durado por lo menos un mes?",
  "¿Discutes frecuentemente con tus padres o tutores, levantando la voz y gritando?",
  "¿Has tenido un accidente automovilístico estando bajo los efectos del alcohol o drogas?",
  "¿Olvidas lo que haces cuando bebes o te drogas?",
  "El mes pasado, ¿manejaste un automóvil estando borracho (a) o drogado (a)?",
  "¿Levantas la voz más que los demás muchachos de tu edad?",
  "¿Has ocasionado daños a propiedad ajena intencionalmente?",
  "¿Has dejado un empleo sencillamente porque no te interesaban las consecuencias de dejarlo?",
  "¿A tus padres o tutores les gusta hablar y estar contigo?",
  "¿Has pasado alguna noche fuera de tu casa sin que tus padres o tutores supieran dónde estabas?",
  "¿El uso del alcohol o drogas te produce cambios repentinos de humor, como pasar de estar contento (a) a estar triste, o viceversa?",
  "¿Te sientes triste la mayor parte del tiempo?",
  "¿Pierdes días de clase o llegas tarde a la escuela por haber consumido bebidas alcohólicas o drogas?",
  "¿Te han dicho alguna vez tus familiares o amigos que debes reducir el uso de bebidas alcohólicas o drogas?",
  "¿Discutes seriamente con tus amigos o familiares por el uso que haces de bebidas alcohólicas o drogas?",
  "¿Molestas mucho a tus amigos?",
  "¿Tienes dificultades para dormir?",
  "¿Tienes dificultades con trabajos escritos?",
  "Las bebidas alcohólicas o drogas, ¿te han inducido a hacer algo que normalmente no harías, como desobedecer alguna regla o ley, o la hora de llegar a casa, o tener relaciones sexuales con alguien?",
  "¿Sientes que a veces pierdes control de ti mismo(a) y terminas peleando?",
  "¿Faltaste a la escuela sin autorización el mes pasado?",
  "¿Tienes dificultades en tus relaciones con alguno de tus amigos debido a las bebidas alcohólicas o drogas que consumes?",
  "¿Tienes dificultad para seguir instrucciones?",
  "¿Tienes amigos que han golpeado o amenazado a alguien sin razón?",
  "¿Has sentido que no puedes controlar el deseo de consumir bebidas alcohólicas o drogas?",
  "¿Tienes buena memoria?",
  "¿Tienen tus padres o tutores una idea relativamente buena de lo que te interesa?",
  "¿Están tus padres o tutores de acuerdo en cuanto a la forma en que te deben educar?",
  "¿Se te hace difícil hacer planes u organizar tus actividades?",
  "¿Tus amigos faltan a la escuela sin autorización con mucha frecuencia?",
  "¿A veces la escuela te hace sentirte como tonto?",
  "¿Frecuentemente sientes deseos de llorar?",
  "¿Te da miedo estar con la gente?",
  "¿Tienes amigos que han robado?",
  "¿Has reprobado algún año en la escuela?",
  "¿Es difícil la escuela para ti?",
  "¿Eres una persona nerviosa, de las que no pueden estar sentadas mucho tiempo?",
  "¿Gritas mucho?",
];

const pagesArray = [];
const numberOfQuestionsInPage = 10;

const createPage = (index, numberOfQuestionsInPage) => {
  const questionsInPage = [];
  for (let i = index; i < index + numberOfQuestionsInPage; i++) {
    if (i < questions.length) {
      questionsInPage.push({
        type: "radiogroup",
        name: (i + 1).toString(),
        title: questions[i],
        isRequired: true,
        choices: [
          { text: "Sí", value: true },
          { text: "No", value: false },
        ],
        requiredErrorText: "Por favor responde la pregunta",
      });
    }
  }

  const ret = {
    title: "INSTRUCCIONES: Por favor, contesta todas las preguntas.",
    questions: questionsInPage,
  };

  return ret;
};

for (let i = 0; i < questions.length / numberOfQuestionsInPage; i++) {
  pagesArray.push(
    createPage(i * numberOfQuestionsInPage, numberOfQuestionsInPage)
  );
}

const analyseResult = (data) => {
  const questionMatrix = {
    2: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    17: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    21: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    25: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    33: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    38: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    41: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    46: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    47: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    48: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    54: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    56: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    57: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    58: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    62: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    65: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    68: {
      category: "Uso-abuso de sustancias",
      rf: true,
    },
    5: {
      category: "Salud mental",
    },
    6: {
      category: "Salud mental",
      rf: true,
    },
    8: {
      categories: ["Salud mental", "Nivel educativo"],
    },
    10: {
      category: "Salud mental",
    },
    15: {
      categories: ["Salud mental", "Nivel educativo"],
    },
    23: {
      category: "Salud mental",
    },
    28: {
      category: "Salud mental",
      rf: true,
    },

    43: {
      category: "Salud mental",
    },
    55: {
      category: "Salud mental",
      rf: true,
    },
    60: {
      category: "Salud mental",
    },
    63: {
      category: "Salud mental",
    },
    66: {
      categories: ["Salud mental", "Nivel educativo"],
    },
    75: {
      category: "Salud mental",
      rf: true,
    },
    76: {
      category: "Salud mental",
      rf: true,
    },

    4: {
      category: "Relaciones familiares",
    },
    14: {
      category: "Relaciones familiares",
    },
    20: {
      category: "Relaciones familiares",
      rf: true,
      inverse: true,
    },
    22: {
      category: "Relaciones familiares",
      inverse: true,
    },
    32: {
      category: "Relaciones familiares",
      inverse: true,
    },
    39: {
      category: "Relaciones familiares",
      inverse: true,
    },
    45: {
      category: "Relaciones familiares",
      rf: true,
    },
    52: {
      category: "Relaciones familiares",
      rf: true,
      inverse: true,
    },
    70: {
      category: "Relaciones familiares",
      inverse: true,
    },
    71: {
      category: "Relaciones familiares",
      inverse: true,
    },
    3: {
      category: "Relaciones con amigos",
      rf: true,
    },
    13: {
      category: "Relaciones con amigos",
      rf: true,
      inverse: true,
    },
    19: {
      category: "Relaciones con amigos",
      rf: true,
    },
    29: {
      category: "Relaciones con amigos",
      rf: true,
    },
    67: {
      category: "Relaciones con amigos",
      rf: true,
    },
    73: {
      category: "Relaciones con amigos",
      rf: true,
    },
    77: {
      category: "Relaciones con amigos",
      rf: true,
    },
    7: {
      category: "Nivel educativo",
    },

    12: {
      category: "Nivel educativo",
      inverse: true,
    },

    18: {
      category: "Nivel educativo",
      inverse: true,
    },
    26: {
      category: "Nivel educativo",
      rf: true,
      inverse: true,
    },
    34: {
      category: "Nivel educativo",
    },
    40: {
      categories: ["Nivel educativo", "Salud mental"],
    },
    42: {
      category: "Nivel educativo",
      rf: true,
    },
    61: {
      category: "Nivel educativo",
    },

    69: {
      category: "Nivel educativo",
      rf: true,
      inverse: true,
    },
    72: {
      category: "Nivel educativo",
      rf: true,
    },
    74: {
      category: "Nivel educativo",
    },
    79: {
      category: "Nivel educativo",
    },
    80: {
      categories: ["Salud mental", "Nivel educativo"],
      rf: true,
    },
    16: {
      category: "Interés laboral",
      ageBased: true,
    },
    27: {
      category: "Interés laboral",
    },
    36: {
      category: "Interés laboral",
    },
    44: {
      category: "Interés laboral",
      ageBased: true,
      rf: true,
    },
    51: {
      category: "Interés laboral",
    },
    78: {
      category: "Interés laboral",
    },
    1: {
      category: "Conducta agresiva-delictiva",
    },
    9: {
      category: "Conducta agresiva-delictiva",
    },
    11: {
      category: "Conducta agresiva-delictiva",
    },
    24: {
      category: "Conducta agresiva-delictiva",
      rf: true,
    },
    30: {
      category: "Conducta agresiva-delictiva",
    },
    31: {
      category: "Conducta agresiva-delictiva",
    },
    35: {
      category: "Conducta agresiva-delictiva",
    },
    37: {
      category: "Conducta agresiva-delictiva",
    },
    49: {
      category: "Conducta agresiva-delictiva",
    },
    50: {
      category: "Conducta agresiva-delictiva",
      rf: true,
    },
    53: {
      category: "Conducta agresiva-delictiva",
    },
    59: {
      category: "Conducta agresiva-delictiva",
    },
    64: {
      category: "Conducta agresiva-delictiva",
    },
    81: {
      category: "Conducta agresiva-delictiva",
    },
  };

  let finalResult = 0;
  let rfResult = 0;
  const categoryRes = {
    "Uso-abuso de sustancias": 0,
    "Salud mental": 0,
    "Relaciones familiares": 0,
    "Relaciones con amigos": 0,
    "Nivel educativo": 0,
    "Interés laboral": 0,
    "Conducta agresiva-delictiva": 0,
  };

  for (const question in data) {
    const value = questionMatrix[question].inverse
      ? data[question]
        ? 0
        : 1
      : data[question]
      ? 1
      : 0;
    if (questionMatrix[question].categories) {
      questionMatrix[question].categories.forEach((category) => {
        categoryRes[category] += value;
      });
    } else {
      categoryRes[questionMatrix[question].category] += value;
    }
    finalResult += value;
    if (questionMatrix[question].rf) {
      rfResult += value;
    }
    console.log(
      `${question}: ${data[question]} value: ${value} inverse: ${questionMatrix[question].inverse} rf: ${questionMatrix[question].rf}`
    );
  }
  console.log({ finalResult });
  console.log({ rfResult });
  console.log({ categoryRes });

  return { ...data, ...categoryRes, finalResult, rfResult };
};

const SurveyComponent = () => {
  const history = useHistory();

  useEffect(() => {
    const surveyId = localStorage.getItem("surveyId");
    if (!surveyId) {
      history.push("/");
    }
  }, [history]);

  const json = {
    title: "CUESTIONARIO DE TAMIZAJE DE PROBLEMAS EN ADOLESCENTES (POSIT)",
    pages: pagesArray,
    completedHtml: "<p><h4>Gracias por completar el cuestionario</h4></p>",
  };

  const survey = new Survey.Model(json);

  survey.showProgressBar = "bottom";
  survey.requiredText = "";
  survey.pageNextText = "Siguiente";
  survey.pagePrevText = "Anterior";
  survey.completeText = "Finalizar";
  survey.onComplete.add(function (sender) {
    console.log("Result JSON:\n" + JSON.stringify(sender.data, null, 3));
    const ref = firebase.collection("surveys");

    const result = analyseResult(sender.data);

    ref
      .doc(localStorage.getItem("surveyId"))
      .update(result)
      .then(() => {
        history.push("/end");
      })
      .catch((err) => {
        console.error(err);
      });
  });

  return (
    <div>
      <Survey.Survey model={survey} />
    </div>
  );
};

export default SurveyComponent;
