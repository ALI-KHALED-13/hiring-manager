import {useState} from 'react';
import { CaretDown, CheckCircle, EnvelopeSimple, FileText, SpeakerHigh, Tag, User } from "@phosphor-icons/react";
import Button from "../../components/Button";
import DropDown from "../../components/Dropdown";
import { filtersOptions, programOptions } from "./configs";
import {
  FilterItem,
  StyledFiltersContainer,
  StyledSection,
  StyledPageCotainer,
  StyledToolsBar,
  StyledPageHeader
} from "./styled";
import { TextInput } from "../../components/TextInputs";
import CardsListing from '../../components/CardsListing';
import { useTheme } from 'styled-components';


const Home =()=> {
  const [searchText, setSearchText] = useState('');

  const theme = useTheme()
 
  return (
    <StyledPageCotainer>
      <StyledSection>
        <header>
          <StyledPageHeader>London Internship Program</StyledPageHeader>
          <p>London</p>
        </header>
        <TextInput
          type="search"
          icon={{name: "MagnifyingGlass", props: {color: 'gray'}}}
          onChange={(ev)=> setSearchText(ev.target.value)}
          value={searchText}
          placeholder="Serach by name, edu, exp or #tag"
        />
        <StyledFiltersContainer>
          <div className='space-flex' >
            <h3>Filters</h3>
            <span> 0 selected </span>
          </div>

          <ul>
            {
              filtersOptions.map(op=> (
                <FilterItem key={op.value}>
                  <FileText />
                    {op.display}
                  <CaretDown style={{marginLeft: 'auto'}} size={10} color={theme.blue}/>
                </FilterItem>
              ))
            }
          </ul>
          
        </StyledFiltersContainer>
        
      </StyledSection>

      <StyledSection style={{flexGrow: 1}}>
        <div className='space-flex'>
          <DropDown
            options={programOptions}
            value={programOptions[3]}
            onChange={(op)=> console.log(op)}
          />

          <StyledToolsBar>
            <Button color="white">
              <Tag size={20}/>
            </Button>

            <Button color="white">
              <User size={20} color="tomato"/>
            </Button>
            <Button color="white">
              <CheckCircle size={20} />
            </Button>
            <Button color="white">
              <SpeakerHigh size={20} />
            </Button>
            <Button color="white">
              <EnvelopeSimple size={20} />
            </Button>

            <Button color="blue" hoverColor="skyBlue">
              Move to Video interview
            </Button>
          </StyledToolsBar>
        </div>

        <CardsListing />

      </StyledSection>
      
    </StyledPageCotainer>
  );
}


export default Home;