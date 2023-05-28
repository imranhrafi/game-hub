import { useRef } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (value: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  //   const handleForm = (e: React.FormEvent<HTMLFormElement>): void => {
  //     e.preventDefault();
  //     if (ref.current) {
  //       onSearch(ref.current.value);
  //     }
  //   };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(ref.current?.value || "");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={10}
          placeholder='Search games.....'
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
