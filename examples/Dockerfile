# from where to inherit
FROM ubuntu

# setting a global variable
ENV PURPOSE=show_how_it_works

# install some stuff
RUN apt-get update && apt-get upgrade -y && apt-get install -y ssh

# create a ssh needed dir
RUN mkdir /run/sshd && chmod 0755 /run/sshd

# this is the port we want to use here, when we run
EXPOSE 22

# this should be started once we run the image
ENTRYPOINT [ "/usr/sbin/sshd", "-D" ]
