type FormSectionProps = {
    label?: string
}

const FormSection = ({label}:FormSectionProps) => {
    return <div className="border-b border-solid border-slate-300 text-xl font-semibold">{label}</div>
}

export default FormSection