import React from 'react';
import {
    ContainerCountry,
    ContainerSelect,
    ContainerElements,
    TextArea,
    Title,
    Description,
    ItemSelect,
    Select,
    Option,
    Button,
    HyperLink,
    Image

}
    from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AiOutlineArrowRight } from 'react-icons/ai';
import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { setCountry } from '../../redux/slice';
import { useEffect, useState } from 'react';

interface Country {
    code: string;
    name: string;
    flag: string;
}

export default function Country() {

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const [countries, setCountries] = useState<Country[]>([]);

    const fetchData = () => {
        fetch("https://v3.football.api-sports.io/countries", {
            method: "GET",
            headers: {
                "x-rapidapi-key": user?.api_key,
                "x-rapidapi-host": "v3.footbal.api-sports.io",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.response);
                setCountries(data.response);
            })
            .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        fetchData();
    }, []);

    function handleCountryClick(countryId) {
        dispatch(setCountry(countryId));
    }
    console.log(user?.api_key);
    return (
        <ContainerCountry>
            <Header />
            <ContainerElements>
                <ContainerSelect>
                    <TextArea>
                        <Title>Selecione o país</Title>
                        <Description>
                            Explore o emocionante mundo do futebol
                            com nosso aplicativo exclusivo! Selecione o país desejado
                            e mergulhe na paixão do futebol.
                        </Description>
                    </TextArea>
                    <ItemSelect>
                        <Select>
                            <Option>--Selecione o país</Option>
                            {countries.map(country => (
                                <Option
                                    key={country.code}
                                    onClick={() => handleCountryClick(country.code)}
                                >
                                    <Image src={country.flag} />
                                    {country.name}
                                </Option>
                            ))
                            }
                        </Select>
                        <Button>
                            <HyperLink to="/League">Seguinte </HyperLink>
                            <AiOutlineArrowRight />
                        </Button>
                    </ItemSelect>
                </ContainerSelect>
            </ContainerElements>
            <Footer />
        </ContainerCountry>
    )
}