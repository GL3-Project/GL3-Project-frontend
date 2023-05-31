import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { ForgotPasswordDTO } from '@/features/auth/types';
import { useForgotPasswordMutation } from '@/features/auth/api/useForgotPasswordMutation';

export function ForgotPasswordPage() {
  const {
    register, handleSubmit,
  } = useForm<ForgotPasswordDTO>();
  const navigate = useNavigate();
  const onSuccess = () => {
    navigate('/auth/login');
  };

  const forgotPasswordMutation = useForgotPasswordMutation({ onSuccess });
  const onSubmit = async (data: ForgotPasswordDTO) => {
    await forgotPasswordMutation.mutateAsync(data);
  };

  const CFaUserAlt = chakra(FaUserAlt);

  return (

    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <CFaUserAlt color="gray.300" />
                  </InputLeftElement>
                  <Input type="email" placeholder="email address" {...register('email')} />
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Send Email
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        <Link as={RouterLink} color="teal.500" to="/auth/login">
          Go back to login page
        </Link>
      </Box>
    </Flex>

  );
}
