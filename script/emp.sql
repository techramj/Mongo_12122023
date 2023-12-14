
drop table emp;

create table emp_14122023(
id number,
name varchar2(20),
salary number);

insert into emp_14122023 values (1,'a',1000);
insert into emp_14122023 values (2,'b',3000);
insert into emp_14122023 values (3,'c',3000);
insert into emp_14122023 values (4,'d',4000);

commit;

select * from emp_14122023;

