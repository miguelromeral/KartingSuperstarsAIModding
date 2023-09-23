export class FormOption {

    constructor(
        public value: string = '',
        public label: string = ''
    ) { }


    public static GetFromEnvironment(environmentValue: any[]): FormOption[] {
        try {
            let array: FormOption[] = [];
            environmentValue?.forEach(x => {
                let f = new FormOption(x?.value ?? 'unknown', x?.label ?? 'Unknown');
                array.push(f);
            });
            return array;
        } catch (e) {
            console.error("Error when getting variable from environments", e);
            return [];
        }
    }
}
