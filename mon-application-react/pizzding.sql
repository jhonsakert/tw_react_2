PGDMP  +    5            
    |            pizzding    17.1    17.1 	    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16830    pizzding    DATABASE     |   CREATE DATABASE pizzding WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE pizzding;
                     postgres    false            �            1259    16845    users    TABLE     z   CREATE TABLE public.users (
    id integer NOT NULL,
    password character varying,
    seed_phrase character varying
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    16844    pizzding_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.pizzding_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public               postgres    false    218            �          0    16845    users 
   TABLE DATA           :   COPY public.users (id, password, seed_phrase) FROM stdin;
    public               postgres    false    218   �       �           0    0    pizzding_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.pizzding_id_seq', 3, true);
          public               postgres    false    217            "           2606    16851    users pizzding_pkey 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT pizzding_pkey PRIMARY KEY (id);
 =   ALTER TABLE ONLY public.users DROP CONSTRAINT pizzding_pkey;
       public                 postgres    false    218            �   D   x�3���,,,ԥ&�eę��cV�����P�S❢iP�h���d-.���\1z\\\ �}i     