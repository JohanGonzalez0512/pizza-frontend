import * as Yup from 'yup';


export const validationsInputs = (dataForm) => {
    const initialValues = {};
    const requiredFields = {};

    dataForm && dataForm.forEach(({ name, value, validations }) => {

        initialValues[name] = value;
        if (validations) {

            {
                let schema;
                for (const rule of validations) {

                    const yupsSchema = {
                        'required': Yup.string().required('Introduzca los datos correspondientes.'),
                        'requiredCheck': Yup.array().min(1, 'Introduzca los datos correspondientes').required('Introduzca los datos correspondientes.'),
                    }
                    if (yupsSchema[rule.type]) {
                        schema = !schema ? yupsSchema[rule.type] : schema.concat(yupsSchema[rule.type]);
                    }
                    requiredFields[name] = schema;
                }
            }
        }
    })
    const validationSchema = Yup.object({ ...requiredFields });

    return [initialValues, validationSchema];
}
