import { Form as UnformForm } from '@unform/web';
import { ComponentPropsWithoutRef, FC } from 'react';

type FormProps = ComponentPropsWithoutRef<typeof UnformForm>;

const Form = UnformForm as FC<Partial<FormProps>>;

export { Form };
