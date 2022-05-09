SET check_function_bodies = false;
CREATE TABLE public.points (
    id integer NOT NULL,
    x_axis integer NOT NULL,
    y_axis integer NOT NULL,
    hex_code character(7) NOT NULL,
    CONSTRAINT "hex_code Format Validation" CHECK ((hex_code ~* '^#[a-f0-9]{6}$'::text)),
    CONSTRAINT "x_axis Range" CHECK (((x_axis >= 0) AND (x_axis <= 100))),
    CONSTRAINT "y_axis Range" CHECK (((y_axis >= 0) AND (y_axis <= 100)))
);
COMMENT ON TABLE public.points IS 'A collection of points to be displayed on canvases with color';
CREATE SEQUENCE public.points_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.points_id_seq OWNED BY public.points.id;
CREATE SEQUENCE public.points_x_axis_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.points_x_axis_seq OWNED BY public.points.x_axis;
ALTER TABLE ONLY public.points ALTER COLUMN id SET DEFAULT nextval('public.points_id_seq'::regclass);
ALTER TABLE ONLY public.points ALTER COLUMN x_axis SET DEFAULT nextval('public.points_x_axis_seq'::regclass);
ALTER TABLE ONLY public.points
    ADD CONSTRAINT points_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.points
    ADD CONSTRAINT points_x_axis_y_axis_key UNIQUE (x_axis, y_axis);
