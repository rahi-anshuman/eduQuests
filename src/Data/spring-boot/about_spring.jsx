



export const about_spring = [
    {
        "title": "What is spring ?",
        "description": "spring is a dependncy injection injection which make out application loosely coupled. When we create object using new keyword it make or application tight coupled.It Provides Inversion of control with the help of which we can do dependency injection(Dependency injection is a design pattern)"
    },
    {
        "title": "Inversion of control",
        "description": "The control of creation of object is taken out of from the hands of developer and given to spring, spring can dynamically create object during the run time."
    },
    {
        "title": "Bean",
        "description": "It is a java object, Which is used to tell spring that to create and manage the life-cycle of the object",
        "code":"<beans>\n\t<bean class='complete package info with class name' name = 'name of the bean'>\n\t\t<property name = 'name of the field in class'>\n\t\t\t<value>123</value>\n\t\t</property>\n\t\t<property name = 'name of the field 2 in class'>\n\t\t\t<value>abcd</value>\n\t\t</property>\n\t</bean>\n</beans>"
    },

]




{/* <beans>
\n\t<bean class='complete package info with class name' name = 'name of the bean'>
\n\t\t<property name = "name of the field in class">
\n\t\t\t<value>123</value>
\n\t\t</property>
\n\t\t<property name = "name of the field 2 in class">
\n\t\t\t<value>abcd</value>
\n\t\t</property>
\n\t</bean>\n
</beans> */}