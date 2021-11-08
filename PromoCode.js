import React from 'react';
import { reduxForm, Field } from 'redux-form';
import styled from 'styled-components';

import { withTranslation } from 'hocs';
import { debug } from 'lib';
import {
    FORMS,
    FIELDS,
    NAMESPACES,
    BUTTON_VARIANTS,
    SIZES,
} from 'config';

import Outline from 'components/Outline';
import SimpleInput from 'components/SimpleInput';
import Button from 'components/Button';

const log = debug('components:PromoCode:');
const Wrapper = styled.div``;
const Form = styled.form``;

function PromoCode({ t, handleSubmit }) {

    function onSubmit(values) {
        const { promoCode } = values;
        log('promoCode: ', promoCode);
    }

    return (
        <Wrapper>
            <Outline>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        component={SimpleInput}
                        name={FIELDS.PROMO_CODE}
                        placeholder={t('enter-promo-code')}
                    />
                    <Button
                        variant={BUTTON_VARIANTS.BLUE}
                        size={SIZES.SM}
                    >
                        {t('activate')}
                    </Button>
                </Form>
            </Outline>
        </Wrapper>
    );
};

export default withTranslation(NAMESPACES.PROMO_CODE)(
    reduxForm({
        form: FORMS.PROMO_CODE,
    })(PromoCode)
);
